using MyRow = wheystore.SanPhamDB.QuanHuyenRow;

namespace wheystore.SanPhamDB;

public interface IQuanHuyenSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class QuanHuyenSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IQuanHuyenSaveHandler
{
}