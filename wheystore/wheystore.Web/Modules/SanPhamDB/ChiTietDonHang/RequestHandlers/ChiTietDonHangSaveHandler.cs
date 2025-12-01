using MyRow = wheystore.SanPhamDB.ChiTietDonHangRow;

namespace wheystore.SanPhamDB;

public interface IChiTietDonHangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class ChiTietDonHangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IChiTietDonHangSaveHandler
{
}