using MyRow = wheystore.SanPhamDB.MaGiamGiaRow;

namespace wheystore.SanPhamDB;

public interface IMaGiamGiaSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class MaGiamGiaSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IMaGiamGiaSaveHandler
{
}