using MyRow = wheystore.SanPhamDB.TinhThanhRow;

namespace wheystore.SanPhamDB;

public interface ITinhThanhSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TinhThanhSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITinhThanhSaveHandler
{
}